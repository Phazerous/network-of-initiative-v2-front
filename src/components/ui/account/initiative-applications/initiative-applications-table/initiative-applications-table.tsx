import { InitiativeApplicationShort } from '../../../../../lib/requests/account';
import OptionTooltip from '../../../option-tooltip/option-tooltip';
import Table from '../../../table/table';
import { HeaderCell } from '../../../table/table-header/table-header';
import { BodyCell, TableRowProps } from '../../../table/table-row/table-row';
import MyApplication from '../../my-application/my-application';

interface InitiativeApplicationsTableProps {
  applications: InitiativeApplicationShort[];
  onSelect: (applicationId: string) => void;
}

const headerCells: HeaderCell[] = [
  {
    value: 'СОДЕЯТЕЛЬ',
    width: 180,
    paddingRight: 48,
  },
  {
    value: 'СТАТУС',
    width: 140,
  },
  {
    width: 31,
    value: <span style={{ visibility: 'hidden' }}>O</span>,
  },
];

export default function InitiativeApplicationsTable({
  applications,
  onSelect,
}: InitiativeApplicationsTableProps) {
  const bodyRows: TableRowProps[] = applications.map((application) => ({
    bodyCells: [
      { value: application.applier.lastname + ' ' + application.applier.name },
      { value: application.status },
      {
        value: (
          <OptionTooltip
            options={[
              {
                value: 'Подробнее',
                onClick: () => (
                  <MyApplication
                    applicationId={application.id}
                    onClose={() => console.log('close')}
                  />
                ),
              },
            ]}
          />
        ),
      },
    ] as BodyCell[],
    onClick: () => onSelect(application.id),
  }));

  return (
    <>
      <Table
        headerCells={headerCells}
        bodyRows={bodyRows}
      />
    </>
  );
}
