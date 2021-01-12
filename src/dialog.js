"use strict";
import React from "react";
import ReactDOM from "react-dom";
import Modal from "@material-ui/core/Modal";
import Button from "@material-ui/core/Button";
import CircularProgress from "@material-ui/core/CircularProgress";
import styles from "./styles/style";

const NewWidget = (properties) => {
  const {
    image,
    attributes,
    select_attribute,
    placeholder_text,
    pathImage,
  } = properties;

  const [open, setOpen] = React.useState(false);

  const [loadingPage, setLoadingPage] = React.useState(false);

  const [randomColor, setRandomColor] = React.useState(null);

  const [randomSelected, setRandomSelected] = React.useState(false);
  let randonOption;

  const randonInit = (min, max) => {
    return min + Math.floor((max - min) * Math.random());
  };

  const openModal = () => {
    setOpen(true);
  };

  const closeModal = () => {
    setRandomColor(null);
    setRandomSelected(false);
    setOpen(false);
  };

  const handleRandomization = () => {
    if (randomSelected) {
      select_attribute(randomColor);
      closeModal();
    } else {
      setLoadingPage(true);
      setRandomSelected(false);

      if (attributes) {
        randonOption = randonInit(0, attributes.length);
        setRandomColor(attributes[randonOption]);
      }
      console.log("Value selected randomly: " + attributes[randonOption]);

      setTimeout(() => {
        select_attribute(randomColor);
        setLoadingPage(false);
        setRandomSelected(true);
      }, 2000);
    }
  };

  const body = (
    <div style={styles.modal}>
      <h2 id="simple-modal-title" style={styles.title}>
        {randomSelected
          ? "The random color is " + randomColor
          : loadingPage
          ? "Loading..."
          : "Click the button to randomize your choice!"}
      </h2>
      <div>
        {randomSelected ? (
          <div>
            <img
              style={styles.image}
              src={pathImage + randomColor + ".png"}
              alt={randomColor}
            />
          </div>
        ) : loadingPage ? (
          <div style={styles.loading}>
            <CircularProgress />
          </div>
        ) : (
          <img style={styles.image} src={image} alt={randomColor} />
        )}
        {!loadingPage && (
          <div>
            <Button
              variant="outlined"
              style={styles.surpriseButton}
              onClick={handleRandomization}
            >
              {randomSelected ? "Select me" : "Surprise me"}
            </Button>
          </div>
        )}
      </div>
    </div>
  );

  return (
    <div>
      <button
        type="button"
        onClick={openModal}
        style={styles.widgetButton}
        alt={placeholder_text}
      ></button>
      <Modal
        open={open}
        onClose={closeModal}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </div>
  );
};

const Widget = (prop) => ({
  start: () => {
    const placeholder = document.querySelector(prop.placeholder);

    const divWidget = document.createElement("div");

    placeholder.appendChild(divWidget);

    ReactDOM.render(<NewWidget {...prop} />, divWidget);
  },
});

window.Widget = Widget;
