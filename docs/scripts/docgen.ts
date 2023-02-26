import path from 'path';
import fs, { existsSync } from 'fs';
import { parse } from 'react-docgen-typescript';
import { Props } from '../types';

const COMPONENTS_FOLDER = path.join(__dirname, '..', '..', 'src', 'lib');

const OUTPUT_FOLDER = path.join(__dirname, '..', 'metadata');

if (existsSync(OUTPUT_FOLDER)) {
  fs.rmSync(OUTPUT_FOLDER, { force: true, recursive: true });
}

fs.mkdirSync(OUTPUT_FOLDER);

fs.readdirSync(COMPONENTS_FOLDER).forEach((fileName) => {
  const filePath = path.join(COMPONENTS_FOLDER, fileName, `${fileName}.ts`);

  const doc = parse(filePath);
  if (doc[0]?.props) {
    const returns = doc?.[0]?.tags?.returns?.split('\n') || [];
    const description = doc?.[0]?.description?.split('\n') || [];
    const defaultValue = doc?.[0]?.tags?.default?.split('\n') || [];
    const propList: Partial<Props>[] = [];
    const props = doc?.[0]?.props || {};
    Object.entries(props).forEach(([propName, propDefinitions]) => {
      const prop = {
        name: propName,
        description: propDefinitions.description,
        defaultValue: propDefinitions.defaultValue?.value,
        required: propDefinitions.required,
        type: {
          name: propDefinitions.type.name,
          value: propDefinitions.type.value,
        },
      };
      propList.push(prop);
    });
    const basicExample = doc[0]?.tags?.example?.split('\n');
    const json = {
      returns,
      description,
      defaultValue,
      propList,
      basicExample,
    };
    const outputFileName = path.join(OUTPUT_FOLDER, `${fileName}.json`);
    fs.writeFileSync(outputFileName, JSON.stringify(json, null, 2));
  }
});
