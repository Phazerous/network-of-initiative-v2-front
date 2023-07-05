export default interface ApplicationDto {
  id: string;
  status: number;
  statusText: string;
  initiative: {
    title: string;
  };
  applier: {
    name: string;
    lastname: string;
  };
}
