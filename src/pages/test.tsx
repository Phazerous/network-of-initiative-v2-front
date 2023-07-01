import InitiativeEditable from '../components/pages/initiative/initiative-editable/initiative-editable';

const values = [
  ['ИНИЦИАТИВА', 'СТАТУС'],
  ['Умный менеджер паролей SmartPassword', 'Одобрена'],
  ['Разработка портала для Проектной практики ИИКС НИЯУ МИФИ', 'Отклонена'],
];

export default function Test() {
  return (
    <div className='center-content'>
      <main>
        <InitiativeEditable />
      </main>
    </div>
  );
}
