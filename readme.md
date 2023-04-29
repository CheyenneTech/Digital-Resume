<!-- HTML !-->
<button class="button-85" role="button">Button 85</button>

<!-- HTML !-->
<button class="button-51" role="button">Button 51</button>

/* CSS */
.new-window-btn {
  background-color: transparent;
  border: 1px solid #266DB6;
  box-sizing: border-box;
  color: #00132C;
  font-family: "Avenir Next LT W01 Bold",sans-serif;
  font-size: 16px;
  font-weight: 700;
  line-height: 24px;
  padding: 16px 23px;
  position: relative;
  text-decoration: none;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
}

.new-window-btn:hover,
.new-window-btn:active {
  outline: 0;
}

.new-window-btn:hover {
  background-color: transparent;
  cursor: pointer;
}

.new-window-btn:before {
  background-color: #D5EDF6;
  content: "";
  height: calc(100% + 3px);
  position: absolute;
  right: -7px;
  top: -9px;
  transition: background-color 300ms ease-in;
  width: 100%;
  z-index: -1;
}

.new-window-btn:hover:before {
  background-color: #6DCFF6;
}

@media (min-width: 768px) {
  .new-window-btn {
    padding: 16px 32px;
  }
}