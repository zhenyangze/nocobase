import {
  CollectionHistoryProvider,
  CollectionManagerProvider,
  registerField,
  SchemaComponentOptions,
  SchemaInitializerProvider,
} from '@nocobase/client';
import React, { useEffect } from 'react';
import { AppendsTreeSelect } from './components/AppendsTreeSelect';
import { SnapshotOwnerCollectionFieldsSelect } from './components/SnapshotOwnerCollectionFieldsSelect';
import { snapshot } from './interface';
import { SnapshotBlockInitializers } from './SnapshotBlock/SnapshotBlockInitializers/SnapshotBlockInitializers';
import { SnapshotBlockInitializersDetailItem } from './SnapshotBlock/SnapshotBlockInitializers/SnapshotBlockInitializersDetailItem';
import { SnapshotBlockProvider } from './SnapshotBlock/SnapshotBlockProvider';
import { SnapshotRecordPicker } from './SnapshotRecordPicker';

const SnapshotField = React.memo((props) => {
  useEffect(() => {
    registerField(snapshot.group, snapshot.name as string, snapshot);
  }, []);

  return (
    <CollectionManagerProvider
      interfaces={{
        snapshot,
      }}
    >
      <CollectionHistoryProvider>
        <SchemaInitializerProvider
          initializers={{
            SnapshotBlockInitializers,
          }}
        >
          <SchemaComponentOptions
            components={{
              SnapshotRecordPicker,
              SnapshotBlockProvider,
              SnapshotBlockInitializersDetailItem,
              AppendsTreeSelect,
              SnapshotOwnerCollectionFieldsSelect,
            }}
          >
            {props.children}
          </SchemaComponentOptions>
        </SchemaInitializerProvider>
      </CollectionHistoryProvider>
    </CollectionManagerProvider>
  );
});
SnapshotField.displayName = 'SnapshotField';

export default SnapshotField;
