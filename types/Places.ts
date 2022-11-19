class Places {
  id: string;
  title: string | null;
  address: string | null;
  image: string | null;
  constructor(
    id: string,
    title: string | null,
    address: string | null,
    image: string | null
  ) {
    this.id = id;
    this.title = title;
    this.address = address;
    this.image = image;
  }
}

export default Places;
