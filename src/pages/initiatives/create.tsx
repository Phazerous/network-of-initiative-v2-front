import InitiativeEditable from '../../components/ui/initiative/initiative-editable/initiative-editable';
import styles from '../../styles/pages/[initiativeId].module.scss';

export default function CreateInitiative() {
  return (
    <>
      <div className={styles.container}>
        <main>
          <InitiativeEditable mode='create' />
        </main>
      </div>
    </>
  );
}
