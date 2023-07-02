export default interface ApplicationShortDto {
  id: string;
  status: number;
  statusText: string;
  statusColor: string;
  initiative: {
    title: string;
  };
}
