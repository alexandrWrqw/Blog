import { useState } from 'react';
import { useFormContext, useFieldArray } from 'react-hook-form';

import classes from './EditTags.module.scss';

function EditTags() {
  const { register, control } = useFormContext();
  const { fields, append, remove } = useFieldArray({
    control,
    name: 'tagList',
  });

  const [value, setValue] = useState('');

  const addTag = () => {
    append({ value });
    setValue('');
  };

  return (
    <label className={classes.container} htmlFor="tag">
      <span className={classes.title}>Tags</span>

      {fields.map((field, index) => (
        <div key={field.id} className={classes['added-tags']}>
          <input
            className={classes.field}
            type="text"
            value={field.value}
            disabled
            {...register(`tagList.${index}.value`)}
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
