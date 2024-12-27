export interface BookPropTypes {
  id: string;
}

export default function Book({ id }: BookPropTypes) {
  return <div>{id}</div>;
}
