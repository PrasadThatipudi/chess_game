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

  get position() {
    return this.#position;
  }

  set position(newPosition) {
    this.#position = newPosition;
  }
}

export { Piece };
