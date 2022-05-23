// export function validation(name, value, errors = {}) {
//   switch (name) {
//     case "name":
//       if (!value) {
//         errors.name = "Name is necessary";
//       } else {
//         errors.name = "";
//       }
//       break;
//     case "hp":
//       if (value > 255 || !value) {
//         errors.hp = "Life is necessary and less than 255";
//       } else {
//         errors.hp = "";
//       }
//       break;
//     case "attack":
//       if (value > 255 || !value) {
//         errors.attack = "Attack is necessary and less than 255";
//       } else {
//         errors.attack = "";
//       }
//       break;
//     case "defense":
//       if (value > 255 || !value) {
//         errors.defense = "Defense is necessary and less than 255";
//       } else {
//         errors.defense = "";
//       }
//       break;
//     case "speed":
//       if (value > 255 || !value) {
//         errors.speed = "Speed is necessary and less than 255";
//       } else {
//         errors.speed = "";
//       }
//       break;
//     case "weight":
//       if (value > 999 || !value) {
//         errors.weight = "Weight is necessary and less than 1000";
//       } else {
//         errors.weight = "";
//       }
//       break;
//     case "height":
//       if (value > 10 || !value) {
//         errors.height = "Height is necessary and less than 10";
//       } else {
//         errors.height = "";
//       }
//       break;
//     default:
//   }
// }

//

export function validation(input) {
  let errors = {};
  // switch (input) {
  //   case "name":
  if (!input.name) {
    errors.name = "Pokemon name is required";
  }
  if (input.name === "") {
    errors.name = undefined;
  }
  if (!/^[A-Za-z]+$/.test(input.name)) {
    errors.name = "Pokemon name must be only letters";
  } else {
    errors.name = undefined;
  }
  //   break;
  // case "hp":
  if (!input.hp) {
    errors.hp = "Health points are required";
  }
  if (
    (input.hp !== "" && input.hp < 1) ||
    (input.hp !== "" && input.hp > 255)
  ) {
    errors.hp = "Hp must be between 1 and 255";
  } else {
    errors.hp = undefined;
  }
  //   break;
  if (!input.attack) {
    errors.attack = "Attack is required";
  }
  if (
    (input.attack !== "" && input.attack < 1) ||
    (input.attack !== "" && input.attack > 255)
  ) {
    errors.attack = "Attack must be between 1 and 255";
  } else {
    errors.attack = undefined;
  }
  // break;
  // case "defense":
  if (input.defense === "") {
    errors.defense = "Defense is required";
  }
  if (
    (input.defense !== "" && input.defense < 1) ||
    (input.defense !== "" && input.defense > 255)
  ) {
    errors.defense = "Defense must be between 1 and 255";
  } else {
    errors.defense = undefined;
  }
  //   break;
  // case "speed":
  if (!input.speed) {
    errors.speed = "Speed is required";
  }
  if (
    (input.speed !== "" && input.speed < 1) ||
    (input.speed !== "" && input.speed > 255)
  ) {
    errors.speed = "Speed must be between 1 and 255";
  } else {
    errors.speed = undefined;
  }
  //   break;
  // case "height":
  if (!input.height) {
    errors.height = "height is required";
  }
  if (
    (input.height !== "" && input.height < 1) ||
    (input.height !== "" && input.height > 255)
  ) {
    errors.height = "height must be between 1 and 255";
  } else {
    errors.height = undefined;
  }
  //   break;
  // case "weight":
  if (!input.weight) {
    errors.weight = "Weight is required";
  }
  if (
    (input.weight !== "" && input.weight < 1) ||
    (input.weight !== "" && input.weight > 255)
  ) {
    errors.weight = "Weight must be between 1 and 255";
  } else {
    errors.weight = undefined;
  }
  //   break;
  // case "types":
  if (!input.types || input.types === "null") {
    errors.types = "Type can not be null";
  } else {
    errors.types = undefined;
  }
  return errors;
  // break;
  // default: return
}
// }
