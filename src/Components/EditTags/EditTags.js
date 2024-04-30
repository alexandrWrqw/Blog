import { useState } from 'react';
import { v4 as uniqueKey } from 'uuid';
import { useFormContext, useFieldArray } from 'react-hook-form';

import classes from './EditTags.module.scss';

function EditTags() {
  const { register, control } = useFormContext();
  const { fields, append, remove } = useFieldArray({
    control,
    name: 'tags',
  });

  const [value, setValue] = useState('');

  const addTag = () => {
    append({ value });
    setValue('');
  };

  return (
    <label className={classes.container} htmlFor="tag">
      <span className={classes.title}>Tags</span>

      {fields.map((tag, index) => (
        <div key={uniqueKey()} className={classes['added-tags']}>
          <input
            className={classes.field}
            type="text"
            value={tag.value}
            disabled
            {...register(`tags.${index}.value`)}
          />
          <button
            className={classes.delete}
            type="button"
            onClick={() => remove(index)}
          >
            Delete
          </button>
        </div>
      ))}

      <div className={classes['add-tag']}>
        <input
          className={classes.field}
          id="tag"
          placeholder="tag"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button className={classes.add} type="button" onClick={addTag}>
          Add tag
        </button>
      </div>
    </label>
  );
}

export default EditTags;
