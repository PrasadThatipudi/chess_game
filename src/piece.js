class Piece {
  #type;
  #color;
  #position;

  constructor(type, color, position) {
    this.#type = type;
    this.#color = color;
    this.#position = position;
  }

  get type() {
    return this.#type;
  }

  get color() {
    return this.#color;
  }

  set position(newPosition) {
    this.#position = newPosition;
  }

  get position() {
    return this.#position;
  }
}

export { Piece };
