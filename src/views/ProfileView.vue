<template>
    <div class="profile-view">
        <div class="header-banner">
            <h2>RECIPE BOOK</h2>
        </div>

        <div class="avatar-container">
            <div class="avatar-placeholder">👤</div>
        </div>

        <div class="auth-form">
            <div class="input-group">
                <label>Enter username:</label>
                <input type="text" />
            </div>

            <div class="input-group">
                <label>Enter Password:</label>
                <input type="password" />
            </div>

            <div class="input-group">
                <label>Enter Password again:</label>
                <input type="password" />
            </div>

            <div class="input-group">
                <label>Enter email address:</label>
                <input type="email" />
            </div>

            <button class="submit-btn">Register / Save</button>
        </div>
    </div>
</template>

<style scoped>
.header-banner {
    background-color: #000;
    color: #fff;
    text-align: center;
    padding: 15px 0;
    border-radius: 25px;
    margin-bottom: 35px;
    letter-spacing: 2px;
}

.avatar-container {
    display: flex;
    justify-content: center;
    margin-bottom: 30px;
}

.avatar-placeholder {
    width: 120px;
    height: 120px;
    background-color: #ccc;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 50px;
    color: white;
}

.auth-form {
    display: flex;
    flex-direction: column;
    gap: 15px;
}

.input-group {
    display: flex;
    flex-direction: column;
    gap: 5px;
}

.input-group label {
    font-size: 14px;
    opacity: 0.9;
}

.input-group input {
    padding: 12px;
    border-radius: 8px;
    border: 1px solid var(--accent-gray);
    background-color: var(--card-bg);
    color: var(--text-color);
    outline: none;
}

.submit-btn {
    margin-top: 15px;
    padding: 12px;
    background-color: #333;
    color: white;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    font-weight: bold;
}

.dark-theme .submit-btn {
    background-color: #fff;
    color: #000;
}
</style>