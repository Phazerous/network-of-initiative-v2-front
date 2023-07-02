import { useState } from 'react';
import InitiativeDto from '../../../../dto/initiative.dto';
import Fieldset from '../../../ui/fieldset/fieldset';
import styles from './initiative.module.scss';
import Button from '../../../ui/button/button';
import createInitiative from '../../../../lib/requests/initiatives';
import { useRouter } from 'next/router';
import { redirectToAccount } from '../../../../lib/requests/account';
import TextField from '../../../ui/text-field/text-field';

interface InitiativeEditableProps {
  initiative?: InitiativeDto;
  mode?: 'view' | 'edit' | 'creation';
}

export default function Initiative({
  initiative,
  mode: initialMode,
}: InitiativeEditableProps) {
  const router = useRouter();

  const [mode, setMode] = useState(initialMode ?? 'view');

  const [title, setTitle] = useState(initiative?.title ?? '');
  const [stage, setStage] = useState(initiative?.stage ?? '');
  const [location, setLocaiton] = useState(initiative?.location ?? '');
  const [university, setUniversity] = useState(initiative?.university ?? '');
  const [description, setDescription] = useState(initiative?.description ?? '');
  const [searching, setSearching] = useState(initiative?.searching ?? '');

  const canEdit = initiative?.canEdit ?? true;

  const handleReturnToView = async () => {
    setMode('view');
    setTitle(initiative?.title ?? '');
    setStage(initiative?.stage ?? '');
    setLocaiton(initiative?.location ?? '');
    setUniversity(initiative?.university ?? '');
    setDescription(initiative?.description ?? '');
    setSearching(initiative?.searching ?? '');
  };

  const handleCreate = async () => {
    const initiativeDto = {};

    //TODO CREATION LOGIC
  };

  const handleSave = async () => {
    const initiativeDto = {
      title,
      stage,
      location,
      university,
      description,
      searching,
    };

    try {
      await createInitiative(initiativeDto);
      redirectToAccount(router);
    } catch (e) {
      console.log(e);
    }
  };

  const render = () => {
    if (mode === 'view') {
      return (
        <>
          <div>
            <div className={styles.form}>
              <TextField
                label='НАЗВАНИЕ ИНИЦИАТИВЫ'
                value={title}
              />

              <div className={styles.details}>
                <TextField
                  label='СТАТУС'
                  value={stage}
                />

                <TextField
                  label='ГОРОД'
                  value={location}
                />

                <TextField
                  label='ВУЗ'
                  value={university}
                />
              </div>

              <TextField
                label='ОПИСАНИЕ ПРОЕКТА'
                value={description}
              />

              <TextField
                label='КОГО МЫ ИЩЕМ'
                value={searching}
              />
            </div>
          </div>

          <div className={styles.controls}>
            {canEdit ? (
              <Button
                style='primary'
                value='Редактировать'
                onClick={() => setMode('edit')}
                auto={true}
              />
            ) : (
              <Button
                style='primary'
                value='Отправить заявку'
                onClick={() => console.log('ok')}
                auto={true}
              />
            )}
          </div>
        </>
      );
    } else if (mode === 'edit') {
      return (
        <>
          <div>
            <div className={styles.form}>
              <Fieldset
                type='input'
                label='НАЗВАНИЕ ИНИЦИАТИВЫ'
                value={title}
                setValue={setTitle}
              />

              <div className={styles.details}>
                <Fieldset
                  type='input'
                  label='СТАТУС'
                  value={stage}
                  setValue={setStage}
                />

                <Fieldset
                  type='input'
                  label='ГОРОД'
                  value={location}
                  setValue={setLocaiton}
                />

                <Fieldset
                  type='input'
                  label='ВУЗ'
                  value={university}
                  setValue={setUniversity}
                />
              </div>

              <Fieldset
                type='textarea'
                label='ОПИСАНИЕ ПРОЕКТА'
                value={description}
                setValue={setDescription}
              />

              <Fieldset
                type='textarea'
                label='КОГО МЫ ИЩЕМ'
                value={searching}
                setValue={setSearching}
              />
            </div>
          </div>

          <div className={styles.controls}>
            <Button
              style='secondary'
              value='Вернуться'
              onClick={handleReturnToView}
              auto={true}
            />
            <Button
              style='primary'
              value='Сохранить изменения'
              onClick={handleSave}
              auto={true}
            />
          </div>
        </>
      );
    } else if (mode === 'creation') {
      <>
        <div>
          <div className={styles.form}>
            <Fieldset
              type='input'
              label='НАЗВАНИЕ ИНИЦИАТИВЫ'
              value={title}
              setValue={setTitle}
            />

            <div className={styles.details}>
              <Fieldset
                type='input'
                label='СТАТУС'
                value={stage}
                setValue={setStage}
              />

              <Fieldset
                type='input'
                label='ГОРОД'
                value={location}
                setValue={setLocaiton}
              />

              <Fieldset
                type='input'
                label='ВУЗ'
                value={university}
                setValue={setUniversity}
              />
            </div>

            <Fieldset
              type='textarea'
              label='ОПИСАНИЕ ПРОЕКТА'
              value={description}
              setValue={setDescription}
            />

            <Fieldset
              type='textarea'
              label='КОГО МЫ ИЩЕМ'
              value={searching}
              setValue={setSearching}
            />
          </div>
        </div>

        <div className={styles.controls}>
          <Button
            style='primary'
            value='Создать'
            onClick={handleCreate}
            auto={true}
          />
        </div>
      </>;
    }
  };

  return (
    <>
      <div className={styles.container}>
        <main>{render()}</main>
      </div>
    </>
  );
}
