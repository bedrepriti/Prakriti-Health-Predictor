/* =========================
   General Reset & Fonts
========================= */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Ubuntu', sans-serif;
}

body {
  background-color: #f5f7fa;
  color: #333;
  line-height: 1.6;
  font-size: 16px;
}

/* =========================
   Background Overlay
========================= */
#background-overlay {
  position: relative;
  width: 100%;
  height: 100vh;
  background-image: url("https://images.pexels.com/photos/22614479/pexels-photo-22614479/free-photo-of-healthcare-background.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2");
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding-top: 50px;
  filter: brightness(0.85);
}

/* =========================
   Title Overlay
========================= */
#title-overlay {
  position: absolute;
  top: 30px;
  left: 50%;
  transform: translateX(-50%);
  font-family: 'Ubuntu', sans-serif;
  font-size: 36px;
  font-weight: bold;
  color: #fff;
  text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.7);
  z-index: 10;
  letter-spacing: 1px;
}

/* =========================
   Form Containers
========================= */
.formContainer {
  display: none;
  max-width: 700px;
  width: 90%;
  margin: 20px auto;
  background-color: rgba(255, 255, 255, 0.95);
  border-radius: 12px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
  padding: 30px 25px;
  transition: all 0.3s ease-in-out;
}

.formContainer.active {
  display: block;
  animation: fadeIn 0.5s ease-in-out;
}

h2 {
  font-size: 24px;
  margin-bottom: 15px;
  text-align: center;
  color: #212121;
  transition: all 0.3s ease;
}

h2.underline {
  text-decoration: underline #20a220 3px;
}

h2.color {
  color: #20a220;
}

/* =========================
   Buttons
========================= */
button, .dis {
  background-color: #20a220;
  color: #fff;
  border: none;
  border-radius: 8px;
  padding: 10px 18px;
  margin: 5px 3px;
  cursor: pointer;
  font-weight: 600;
  transition: all 0.3s ease;
}

button:hover, .dis:hover {
  background-color: #188f18;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0,0,0,0.15);
}

button:disabled {
  background-color: #ccc;
  cursor: not-allowed;
}

/* =========================
   Multi-select Dropdown
========================= */
.dropdown {
  position: relative;
  width: 100%;
  margin: 10px 0;
}

.dropdown-select {
  border: 2px solid #ccc;
  border-radius: 8px;
  padding: 10px 12px;
  display: flex;
  flex-wrap: wrap;
  min-height: 45px;
  align-items: center;
  cursor: pointer;
  background-color: #fff;
}

.dropdown-select .selected-item {
  background-color: #20a220;
  color: #fff;
  padding: 5px 10px;
  border-radius: 20px;
  margin: 3px 5px;
  display: flex;
  align-items: center;
  font-size: 14px;
}

.dropdown-select .remove {
  margin-left: 5px;
  cursor: pointer;
}

.dropdown-content {
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  background-color: #fff;
  border: 2px solid #ccc;
  border-radius: 8px;
  max-height: 200px;
  overflow-y: auto;
  z-index: 100;
  display: none;
  padding: 5px 0;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
}

.dropdown-content button {
  display: block;
  width: 95%;
  margin: 3px auto;
  text-align: left;
  background-color: #f0f0f0;
  color: #333;
}

.dropdown-content button.selected {
  background-color: #20a220;
  color: #fff;
}

/* =========================
   Floating Inputs
========================= */
.floating-input {
  position: relative;
  margin: 20px 0;
}

.floating-input input {
  width: 100%;
  border: 2px solid #ccc;
  border-radius: 8px;
  padding: 12px 10px;
  font-size: 16px;
  outline: none;
  transition: border 0.3s ease;
}

.floating-input input:focus {
  border-color: #20a220;
}

.floating-input label {
  position: absolute;
  top: 0px;
  left: 10px;
  font-size: 14px;
  color: #282727;
  pointer-events: none;
  transition: all 0.3s ease;
}

/* =========================
   Loading Overlay
========================= */
#loadingOverlay {
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.6);
  color: #fff;
  font-size: 24px;
  justify-content: center;
  align-items: center;
  z-index: 9999;
}

/* =========================
   Print Styles
========================= */
@media print {
  body * {
    visibility: hidden;
  }
  #output, #results, #medications-container {
    visibility: visible;
    position: absolute;
    left: 0;
    top: 0;
  }
}

/* =========================
   Animations
========================= */
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

/* =========================
   Other Elements
========================= */
#buttonContainer, #medications-container, #map {
  display: none;
}

#form0Container {
  display: block;
}

#predict, #medic {
  display: block;
  margin-top: 10px;
}

.round-div {
  position: fixed;
  bottom: 20px;
  right: 20px;
  width: 60px;
  height: 60px;
  background-color: #20a220;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  cursor: pointer;
  box-shadow: 0 4px 12px rgba(0,0,0,0.2);
  transition: transform 0.3s ease;
}

.round-div:hover {
  transform: scale(1.1);
}

.rectangle-form {
  display: none;
  position: fixed;
  top: 50%;
  left: 50%;
  width: 90%;
  max-width: 600px;
  transform: translate(-50%, -50%);
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 8px 20px rgba(0,0,0,0.25);
  padding: 20px;
  z-index: 999;
}

.close-button {
  position: absolute;
  top: 10px;
  right: 12px;
  cursor: pointer;
  font-size: 20px;
  font-weight: bold;
}

/* =========================
   Buttons Selected States
========================= */
button.selected {
  background-color: #188f18;
  color: #fff;
  font-weight: bold;
  box-shadow: 0 3px 10px rgba(0,0,0,0.15);
}
