export abstract class ValidateComponent {
  abstract validate(value: unknown): boolean;
}

// Leaf
export class ValidateEmail extends ValidateComponent {
  validate(value: string): boolean {
    if (typeof value !== 'string') return false;
    return /@/.test(value);
  }
}

export class ValidateString extends ValidateComponent {
  validate(value: unknown): boolean {
    return typeof value === 'string';
  }
}

export class ValidateNumber extends ValidateComponent {
  validate(value: unknown): boolean {
    return typeof value === 'number';
  }
}

// Composite
export class ValidateComposite extends ValidateComponent {
  private readonly children: ValidateComponent[] = [];

  validate(value: unknown): boolean {
    for (const child of this.children) {
      const validation = child.validate(value);
      if (!validation) return false;
    }

    return true;
  }
  add(...validations: ValidateComponent[]) {
    this.children.push(...validations);
  }
}

const validationEmail = new ValidateEmail();
const validationNumber = new ValidateNumber();
const validationString = new ValidateString();
const validationComposite = new ValidateComposite();

validationComposite.add(validationEmail, validationString);
console.log(validationComposite);
console.log(validationComposite.validate('!@1'));
