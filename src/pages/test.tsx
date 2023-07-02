import InitiativeEditable from '../components/pages/initiative/initiative-editable/initiative-editable';
import Modal from '../components/ui/modal/modal';

const values = [
  ['ИНИЦИАТИВА', 'СТАТУС'],
  ['Умный менеджер паролей SmartPassword', 'Одобрена'],
  ['Разработка портала для Проектной практики ИИКС НИЯУ МИФИ', 'Отклонена'],
];

export default function Test() {
  return (
    <>
      <div className='center-content'>
        <main>
          <InitiativeEditable />
        </main>
      </div>

      <Modal>
        <h1>Hello world</h1>
        <p>Hello nice sun</p>
      </Modal>
    </>
  );
}
