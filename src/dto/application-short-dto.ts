export default interface ApplicationShortDto {
  id: string;
  status: number;
  statusText: string;
  initiative: {
    title: string;
  };
}
