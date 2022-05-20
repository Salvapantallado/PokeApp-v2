// export function validation(name, value, errors = {}) {
//   switch (name) {
//     case "name":
//       if (!value) {
//         errors.name = "Pokemon name is required";
//       }
//       if (!/^[A-Za-z]+$/.test(value)) {
//         errors.name = "Pokemon name must be only letters";
//       } else {
//         errors.name = ""
//       }
//       break;
//     case "hp":
//       if (!value) {
//         errors.hp = "Health points are required";
//       }
//       if (!/^([0-9]{1,2}|1[0-9]{1,2}|2[0-4][0-9]|25[0-5])$/.test(value)) {
//         errors.hp = "Hp must be between 1 and 255";
//       }else {
//         errors.hp = ""
//       }
//       break;
//     case "attack":
//       if (!value) {
//         errors.attack = "Attack is required";
//       }
//       if (
//         !/^([0-9]{1,2}|1[0-9]{1,2}|2[0-4][0-9]|25[0-5])$/.test(value)
//       ) {
//         errors.attack = "Attack must be between 1 and 255";
//       }else {
//         errors.attack = ""
//       }
//       break;
//     case "defense":
//       if (!value) {
//         errors.defense = "Defense is required";
//       }
//       if (
//         !/^([0-9]{1,2}|1[0-9]{1,2}|2[0-4][0-9]|25[0-5])$/.test(value)
//       ) {
//         errors.defense = "Defense must be between 1 and 255";
//       }else {
//         errors.attack = ""
//       }
//       break;
//     case "speed":
//       if (!value) {
//         errors.speed = "Speed is required";
//       }
//       if (!/^([0-9]{1,2}|1[0-9]{1,2}|2[0-4][0-9]|25[0-5])$/.test(value)) {
//         errors.speed = "Speed must be between 1 and 255";
//       }else {
//         errors.speed = ""
//       }
//       break;
//     case "height":
//       if (!value) {
//         errors.height = "Height is required";
//       }
//       if (
//         !/^([0-9]{1,2}|1[0-9]{1,2}|2[0-4][0-9]|25[0-5])$/.test(value)
//       ) {
//         errors.height = "Height must be between 1 and 255";
//       }else {
//         errors.height = ""
//       }
//       break;
//     case "weight":
//       if (!value) {
//         errors.weight = "Weight is required";
//       }
//       if (
//         !/^([0-9]{1,2}|1[0-9]{1,2}|2[0-4][0-9]|25[0-5])$/.test(value)
//       ) {
//         errors.weight = "Weight must be between 1 and 255";
//       }else {
//         errors.weight = ""
//       }
//       break;
//     case "types":
//       if (!value || value === "null") {
//         errors.types = "Type can not be null";
//       }else {
//         errors.types = ""
//       }
//       // return errors;
//       break;
//       default: return  
//   }
// }



// 


export function validation(input) {
  let errors = {}
  // switch (input) {
  //   case "name":
      if (!input.name) {
        errors.name = "Pokemon name is required";
      }
      if (!/^[A-Za-z]+$/.test(input.name)) {
        errors.name = "Pokemon name must be only letters";
      } else {
        errors.name = ""
      }
    //   break;
    // case "hp":
      if (!input.hp) {
        errors.hp = "Health points are required";
      }
      if (!/^([0-9]{1,2}|1[0-9]{1,2}|2[0-4][0-9]|25[0-5])$/.test(input.hp)) {
        errors.hp = "Hp must be between 1 and 255";
      }else {
        errors.hp = ""
      }
    //   break;
      if (!input.attack) {
        errors.attack = "Attack is required";
      }
      if (!/^([0-9]{1,2}|1[0-9]{1,2}|2[0-4][0-9]|25[0-5])$/.test(input.attack)) {
        errors.attack = "Attack must be between 1 and 255";
      }else {
        errors.attack = ""
      }
      // break;
    // case "defense":
      if (input.defense === "") {
        errors.defense = "Defense is required";
      }
      if ( !/^([0-9]{1,2}|1[0-9]{1,2}|2[0-4][0-9]|25[0-5])$/.test(input.defense)) {
        errors.defense = "Defense must be between 1 and 255";
      }else {
        errors.defense = ""
      }
    //   break;
    // case "speed":
      if (!input.speed) {
        errors.speed = "Speed is required";
      }
      if ( !/^([0-9]{1,2}|1[0-9]{1,2}|2[0-4][0-9]|25[0-5])$/.test(input.speed)) {
        errors.speed = "Speed must be between 1 and 255";
      }else {
        errors.speed = ""
      }
    //   break;
    // case "height":
    if (!input.height) {
      errors.height = "height is required";
    }
    if (!/^([0-9]{1,2}|1[0-9]{1,2}|2[0-4][0-9]|25[0-5])$/.test(input.height)) {
      errors.height = "height must be between 1 and 255";
    }else {
      errors.height = ""
    }
    //   break;
    // case "weight":
      if (!input.weight) {
        errors.weight = "Weight is required";
      }
      if (!/^([0-9]{1,2}|1[0-9]{1,2}|2[0-4][0-9]|25[0-5])$/.test(input.weight)) {
        errors.weight = "Weight must be between 1 and 255";
      }else {
        errors.weight = ""
      }
    //   break;
    // case "types":
      if (!input.types || input.types === "null") {
        errors.types = "Type can not be null";
      }else {
        errors.types = ""
      }
      return errors;
      // break;
      // default: return  
  }
// }
