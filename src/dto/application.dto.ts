export default interface ApplicationDto {
  id: string;
  status: number;
  statusText: string;
  initiative: {
    title: string;
  };
}
