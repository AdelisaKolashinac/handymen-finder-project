import React, { useState } from "react";
import { Button } from "../../../../../components/Button/Button";
import { ButtonTransparent } from "../../../../../components/ButtonTransparent/ButtonTransparent";
import { Checkbox } from "../../../../../components/Checkbox/Checkbox";
import { useUserStore } from "../../../../../stores/userStore";
import styles from "./EditClientProfile.module.css";
import { Link, useNavigate } from "react-router-dom";
import {
  updateEmail,
  updatePassword,
  EmailAuthProvider,
  reauthenticateWithCredential,
  deleteUser,
} from "firebase/auth";
import { auth, db } from "../../../../../lib/firebase";
import { doc, updateDoc } from "firebase/firestore";
import { Modal } from "../../../../../components/Modal/Modal";

export function EditClientProfile() {
  const [editingField, setEditingField] = useState<string | null>(null);
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const [modalType, setModalType] = useState<"success" | "error">("success");
  const { logout, user, updateUser } = useUserStore();
  const navigate = useNavigate();

  const [userData, setUserData] = useState({
    fullname: user?.fullname || "",
    email: user?.email || "",
    location: user?.location || "",
    phone: user?.phone || "",
    password: "",
    confirmPassword: "",
    currentPassword: "",
    notifyEmail: user?.notifyEmail || false,
    notifySMS: user?.notifySMS || false,
  });

  const handleEditClick = (field: string) => setEditingField(field);

  const triggerModal = (message: string, type: "success" | "error") => {
    setModalMessage(message);
    setModalType(type);
    setShowModal(true);

    setTimeout(() => {
      setShowModal(false);
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserData((prev) => ({
      ...prev,
      [e.target.name]:
        e.target.type === "checkbox" ? e.target.checked : e.target.value,
    }));
  };

  const handleSave = async () => {
    setError("");
    const currentUser = auth.currentUser;

    if (!currentUser) {
      triggerModal("No authenticated user found.", "error");
      return;
    }

    if (userData.password && !userData.currentPassword) {
      setError("Please enter your current password to change your password.");
      return;
    }

    if (userData.password && userData.password !== userData.confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    try {
      if (userData.password) {
        const credential = EmailAuthProvider.credential(
          currentUser.email!,
          userData.currentPassword
        );
        await reauthenticateWithCredential(currentUser, credential);
      }

      if (userData.email !== user?.email) {
        await updateEmail(currentUser, userData.email);
      }

      if (userData.password) {
        await updatePassword(currentUser, userData.password);
      }

      const userDocRef = doc(db, "users", currentUser.uid);
      await updateDoc(userDocRef, {
        fullname: userData.fullname,
        location: userData.location,
        phone: userData.phone,
        notifyEmail: userData.notifyEmail,
        notifySMS: userData.notifySMS,
      });

      const editedUser = {
        fullname: userData.fullname,
        email: userData.email,
        location: userData.location,
        phone: userData.phone,
        notifyEmail: userData.notifyEmail,
        notifySMS: userData.notifySMS,
      };

      updateUser(editedUser);
      triggerModal("Profile changes saved successfully", "success");
      setEditingField(null);
      setError("");
    } catch (error) {
      console.error("Error updating profile:", error);
      triggerModal(
        "Failed to update profile. Please check your credentials.",
        "error"
      );
    }
  };

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  const togglePasswordVisibility = () => setShowPassword((prev) => !prev);

  const handleDeleteAccount = async () => {
    const currentUser = auth.currentUser;

    if (!currentUser) {
      triggerModal("No authenticated user found.", "error");
      return;
    }

    try {
      const credential = EmailAuthProvider.credential(
        currentUser.email!,
        userData.currentPassword
      );
      await reauthenticateWithCredential(currentUser, credential);
      await deleteUser(currentUser);
      logout();
      navigate("/");
    } catch (error) {
      console.error("Error deleting account:", error);
      setError("Failed to delete account. Please try again.");
    }
  };

  return (
    <>
      <div className={`wrapper ${styles.editClientProfile}`}>
        {/* Header */}
        <header className={styles.editClientProfile__header}>
          <Link
            to={"/client-profile"}
            className={styles.editClientProfile__backButton}
            aria-label="Back to profile"
          >
            <img src="/arrows&location/arrow-left.png" alt="Back to profile" />
          </Link>
          <h2 className={styles.editClientProfile__title}>Konto bearbeiten</h2>
          <button
            className={styles.editClientProfile__notificationButton}
            aria-label="Notifications"
          >
            <img src="/icons/bell-icon.png" alt="Notifications" />
          </button>
        </header>

        {/* Profile Picture */}
        <div
          className={`border-bottom ${styles.editClientProfile__imgContainer}`}
        >
          <img src={user?.img} alt="Users's profile" />
          <span className={styles.editClientProfile__editText}>EDIT</span>
        </div>

        {/* Profile Fields */}
        <div className={styles.editClientProfile__fields}>
          <div className={`border-bottom ${styles.editClientProfile__field}`}>
            <div className={styles.editClientProfile__info}>
              <p>
                Full Name <span>*</span>
              </p>
              {editingField === "fullname" ? (
                <input
                  type="text"
                  name="fullname"
                  value={userData.fullname}
                  onChange={handleChange}
                />
              ) : (
                <p className={styles.editClientProfile__userInfo}>
                  {user?.fullname}
                </p>
              )}
            </div>
            <button
              className={styles.editClientProfile__editButton}
              onClick={() => handleEditClick("fullname")}
              aria-label="Edit Full Name"
            >
              Edit
            </button>
          </div>
          <div className={`border-bottom ${styles.editClientProfile__field}`}>
            <div className={styles.editClientProfile__info}>
              <p>
                Email Address <span>*</span>
              </p>
              {editingField === "email" ? (
                <input
                  type="email"
                  name="email"
                  value={userData.email}
                  onChange={handleChange}
                  className={styles.editClientProfile__userInfo}
                />
              ) : (
                <p className={styles.editClientProfile__userInfo}>
                  {user?.email}
                </p>
              )}
              <p className={styles.editClientProfile__verifyEmail}>
                Verify email address
              </p>
            </div>
            <button
              className={styles.editClientProfile__editButton}
              onClick={() => handleEditClick("email")}
              aria-label="Edit Email"
            >
              Edit
            </button>
          </div>
          <div className={`border-bottom ${styles.editClientProfile__field}`}>
            <div className={styles.editClientProfile__info}>
              <p>Location</p>
              {editingField === "location" ? (
                <input
                  type="text"
                  name="location"
                  value={userData.location}
                  onChange={handleChange}
                />
              ) : (
                <p className={styles.editClientProfile__userInfo}>
                  {user?.location}
                </p>
              )}
            </div>
            <button
              className={styles.editClientProfile__editButton}
              onClick={() => handleEditClick("location")}
              aria-label="Edit Location"
            >
              Edit
            </button>
          </div>
          <div className={`border-bottom ${styles.editClientProfile__field}`}>
            <div className={styles.editClientProfile__info}>
              <p>Phone Number</p>
              {editingField === "phone" ? (
                <input
                  type="tel"
                  name="phone"
                  value={userData.phone}
                  onChange={handleChange}
                />
              ) : (
                <p className={styles.editClientProfile__userInfo}>
                  {user?.phone}
                </p>
              )}
            </div>
            <button
              className={styles.editClientProfile__editButton}
              onClick={() => handleEditClick("phone")}
              aria-label="Edit Phone Number"
            >
              Edit
            </button>
          </div>

          <div className={`border-bottom ${styles.editClientProfile__field}`}>
            <div className={styles.editClientProfile__info}>
              <p>Password</p>
              {editingField === "password" ? (
                <>
                  <div className={styles.inputGroup}>
                    <label htmlFor="currentPassword">Current Password</label>
                    <input
                      type="password"
                      id="currentPassword"
                      name="currentPassword"
                      value={userData.currentPassword}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    value={userData.password}
                    onChange={handleChange}
                    placeholder="Enter new password"
                  />
                  <div
                    className={styles.editClientProfile__icon}
                    onClick={togglePasswordVisibility}
                  >
                    <i
                      className={`fa-regular ${
                        showPassword ? "fa-eye" : "fa-eye-slash"
                      }`}
                    />
                  </div>
                  <input
                    type={showPassword ? "text" : "password"}
                    name="confirmPassword"
                    value={userData.confirmPassword}
                    onChange={handleChange}
                    placeholder="Confirm password"
                  />
                </>
              ) : (
                <p className={styles.editClientProfile__userInfo}>*******</p>
              )}
            </div>
            {error && <p className="errorMessage">{error}</p>}
            <button
              className={styles.editClientProfile__editButton}
              onClick={() => handleEditClick("password")}
              aria-label="Change Password"
            >
              Change
            </button>
          </div>
        </div>

        {/* Notifications */}
        <div className={styles.editClientProfile__notificationOption}>
          <Checkbox
            id="notify-email"
            name="notifyEmail"
            checked={userData.notifyEmail}
            onChange={handleChange}
          >
            Notify via email
          </Checkbox>
          <p>Get notified via email when something happens</p>
        </div>
        <div className={styles.editClientProfile__notificationOption}>
          <Checkbox
            id="notify-sms"
            name="notifySMS"
            checked={userData.notifySMS}
            onChange={handleChange}
          >
            Notify via SMS
          </Checkbox>
          <p>Get notified via SMS when something happens</p>
        </div>

        {/* Buttons Container */}
        <div className={styles.editClientProfile__formActions}>
          <ButtonTransparent
            width="100%"
            onClick={() => navigate("/client-profile")}
          >
            Cancel
          </ButtonTransparent>
          <Button onClick={handleSave}>Save Changes</Button>
        </div>
        <div className={styles.editClientProfile__accountActions}>
          <button
            className={styles.editClientProfile__logoutBtn}
            onClick={handleLogout}
          >
            Logout <img src="/icons/logout-icon.png" alt="Log out" />
          </button>
          <button
            className={styles.editClientProfile__deleteBtn}
            onClick={handleDeleteAccount}
          >
            Delete your account
          </button>
        </div>
      </div>
      {showModal && (
        <Modal
          showModal={showModal}
          setShowModal={setShowModal}
          modalMessage={modalMessage}
          modalType={modalType}
        />
      )}
    </>
  );
}
