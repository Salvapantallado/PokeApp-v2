export function validation(input) {
  let errors = {};
  if (!input.name) {
    errors.name = "Pokemon name is required";
  } else if (!/^[A-Za-z]+$/.test(input.name)) {
    errors.name = "Pokemon name must be only letters";
  }
  if (!input.hp) {
    errors.hp = "Health points are required";
  } else if (!/^([0-9]{1,2}|1[0-9]{1,2}|2[0-4][0-9]|25[0-5])$/.test(input.hp)) {
    errors.hp = "Hp must be between 1 and 255";
  }
  if (!input.attack) {
    errors.attack = "Attack is required";
  } else if (
    !/^([0-9]{1,2}|1[0-9]{1,2}|2[0-4][0-9]|25[0-5])$/.test(input.attack)
  ) {
    errors.attack = "Attack must be between 1 and 255";
  }
  if (!input.defense) {
    errors.defense = "Defense is required";
  } else if (
    !/^([0-9]{1,2}|1[0-9]{1,2}|2[0-4][0-9]|25[0-5])$/.test(input.defense)
  ) {
    errors.defense = "Defense must be between 1 and 255";
  }
  if (!input.speed) {
    errors.speed = "Speed is required";
  } else if (
    !/^([0-9]{1,2}|1[0-9]{1,2}|2[0-4][0-9]|25[0-5])$/.test(input.speed)
  ) {
    errors.speed = "Speed must be between 1 and 255";
  }
  if (!input.height) {
    errors.height = "Heigth is required";
  } else if (
    !/^([0-9]{1,2}|1[0-9]{1,2}|2[0-4][0-9]|25[0-5])$/.test(input.height)
  ) {
    errors.height = "Heigth must be between 1 and 255";
  }
  if (!input.weight) {
    errors.weight = "Weigth is required";
  } else if (
    !/^([0-9]{1,2}|1[0-9]{1,2}|2[0-4][0-9]|25[0-5])$/.test(input.weight)
  ) {
    errors.weight = "Weigth must be between 1 and 255";
  }
  if (!input.types || input.types === "null") {
    errors.types = "Type can not be null";
  }
  return errors;
}
