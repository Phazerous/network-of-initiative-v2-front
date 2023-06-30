import TableMyApplications from '../components/ui/table-my-applications/table-my-applications';
import Table from '../components/ui/table/table';

const values = [
  ['ИНИЦИАТИВА', 'СТАТУС'],
  ['Умный менеджер паролей SmartPassword', 'Одобрена'],
  ['Разработка портала для Проектной практики ИИКС НИЯУ МИФИ', 'Отклонена'],
];

export default function Test() {
  return (
    <>
      <TableMyApplications />
    </>
  );
}
