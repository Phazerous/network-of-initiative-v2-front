export default interface ApplicationForUserDto {
  id: string;
  status: number;
  statusText: string;
  initiative: {
    title: string;
  };
}
