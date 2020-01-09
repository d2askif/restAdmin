/**
 * This defines the different validations for input regarding the signin and signup
 */
// @flow
import validatejs from 'validate.js';

export const FirstNameConstraints = {
  firstName: {
    length: {
      minimum: 4,
      maximum: 30,
      message() {
        return 'error.INPUT_LENGTH_BETWEEN, { min: 4, max: 30 }';
      }
    },
    presence: true
  }
};

export const LastNameConstraints = {
  lastName: {
    length: {
      minimum: 1,
      maximum: 30,
      message() {
        return 'error.INPUT_LENGTH_BETWEEN, { min: 1, max: 30 }';
      }
    },
    presence: true
  }
};

export const UsernameConstraints = {
  username: {
    length: {
      minimum: 2,
      maximum: 30,
      message() {
        return 'error.INPUT_LENGTH_BETWEEN, { min: 2, max: 30 }';
      }
    },
    presence: true
  }
};

export const PasswordConstraints = {
  password: {
    length: {
      minimum: 2,
      maximum: 30,
      message() {
        return 'error.INPUT_LENGTH_BETWEEN + min: 1, max: 30 ';
      }
    },
    presence: true
  }
};

export const LatConstraints = {
  lat: {
    length: {
      minimum: 2,
      maximum: 30,
      message() {
        return 'you should enter a valid lat';
      }
    },
    presence: true
  }
};

export const LngConstraints = {
  lng: {
    length: {
      minimum: 2,
      maximum: 30,
      message() {
        return 'you should enter a valid lng';
      }
    },
    presence: true
  }
};

export const EmailConstraints = {
  email: {
    email: {
      message: 'error.NOT_A_EMAIL'
    }
  }
};

export function validateFirstName(value: string): string | null {
  const result = validatejs({ firstName: value }, FirstNameConstraints, {
    fullMessages: false
  });
  if (result) {
    return result.firstName[0];
  }

  return null;
}

export function validateLastName(value: string): string | null {
  const result = validatejs({ lastName: value }, LastNameConstraints, {
    fullMessages: false
  });
  if (result) {
    return result.lastName[0];
  }

  return null;
}

export function validateUsername(value: string): string | null {
  const result = validatejs({ username: value }, UsernameConstraints, {
    fullMessages: false
  });
  if (result) {
    return result.username[0];
  }

  return null;
}

export function validatePassword(value: string): string | null {
  console.log('validatePassword', value);

  const result = validatejs({ password: value }, PasswordConstraints, {
    fullMessages: false
  });
  if (result) {
    return result.password[0];
  }

  return null;
}

export function validateEmail(value: string): string | null {
  const result = validatejs({ email: value }, EmailConstraints, {
    fullMessages: false
  });
  if (result) {
    return result.email[0];
  }

  return null;
}

export function ValidateLat(value: string): string | null {
  const result = validatejs({ lat: value }, LatConstraints, {
    fullMessages: false
  });
  if (result) {
    return result.lat[0];
  }

  return null;
}

export function ValidateLng(value: string): string | null {
  const result = validatejs({ lng: value }, LngConstraints, {
    fullMessages: false
  });
  if (result) {
    return result.lng[0];
  }

  return null;
}

export function validateUpload(value: string): string | null {
  return null;
}

interface ValidationType {
  [key: string]: (value: string) => string | null;
}
const validation: ValidationType = {
  lat: ValidateLat,
  lng: ValidateLng,
  name: validateFirstName,
  lastName: validateLastName,
  owner: validateFirstName,
  city: validateFirstName,
  subCity: validateFirstName,
  kebele: validateFirstName,
  status: validateFirstName,
  phone: validateFirstName,
  address: validateFirstName,
  upload: validateUpload
};

export default validation;
