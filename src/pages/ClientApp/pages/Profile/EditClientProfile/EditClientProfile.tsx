import React, { useState } from "react";
import { Button } from "../../../../../components/Button/Button";
import { ButtonTransparent } from "../../../../../components/ButtonTransparent/ButtonTransparent";
import { Checkbox } from "../../../../../components/Checkbox/Checkbox";
import { useAppNavigation } from "../../../../../hooks/useAppNavigation";
import { useUserStore } from "../../../../../stores/userStore";
import styles from "./EditClientProfile.module.css";

export function EditClientProfile() {
  const { logout, user, updateUser } = useUserStore();
  const { navigate } = useAppNavigation();

  const [userData, setUserData] = useState({
    fullname: user?.fullname || "",
    email: user?.email || "",
    location: user?.location || "",
    phone: user?.phone || "",
    password: "",
    confirmPassword: "",
    notifyEmail: false,
    notifySMS: false,
  });

  const [editingField, setEditingField] = useState<string | null>(null);
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const handleEditClick = (field: string) => {
    setEditingField(field);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserData((prev) => ({
      ...prev,
      [e.target.name]:
        e.target.type === "checkbox" ? e.target.checked : e.target.value,
    }));
  };

  const handleSave = () => {
    if (userData.password && userData.password !== userData.confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    const editedUser = {
      fullname: userData.fullname,
      email: userData.email,
      location: userData.location,
      phone: userData.phone,
      notifyEmail: userData.notifyEmail,
      notifySMS: userData.notifySMS,
      ...(userData.password && { password: userData.password }),
    };

    updateUser(editedUser);
    localStorage.setItem("user", JSON.stringify(editedUser));

    setEditingField(null);
    setError("");
  };

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <div className={`wrapper ${styles.editClientProfile}`}>
      {/* Header */}
      <header className={styles.editClientProfile__header}>
        <button
          className={styles.editClientProfile__backButton}
          onClick={() => navigate("/client-profile")}
          aria-label="Back to profile"
        >
          <img src="/arrows&location/arrow-left.png" alt="Back to profile" />
        </button>
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
        <img src="/anna.png" alt="Users's profile" />
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
                  {showPassword ? (
                    <i className="fa-regular fa-eye"></i>
                  ) : (
                    <i className="fa-regular fa-eye-slash"></i>
                  )}
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
        <button className={styles.editClientProfile__deleteBtn}>
          Delete your account
        </button>
      </div>
    </div>
  );
}
