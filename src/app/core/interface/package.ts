export class Package {
  id: UUID;
  dealerId: UUID;
  name: string;
  description: string;
  minValue: number;
  maxValue: number;
  isShow: boolean;
  createdAt: DateTimeString;
  updatedAt: DateTimeString;
  img: string;
  thumbnail: string; // url

  constructor(name: string, description: string, min: number, max: number) {
    this.name = name;
    this.description = description;
    this.minValue = min;
    this.maxValue = max;
  }
  setImage(img: string): Package {
    this.img = img;
    return this;
  }
  validateMinAndMax(): boolean {
    return this.minValue < this.maxValue;
  }
}
