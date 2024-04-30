import { useNavigate } from 'react-router-dom';
import { useForm, FormProvider } from 'react-hook-form';

import { useCreateArticleMutation } from '../../API/articlesApi';

import classes from './CreateArticle.module.scss';
import EditTags from '../EditTags/EditTags';
import Input from '../Input/Input';

function CreateArticle() {
  const navigate = useNavigate();

  const methods = useForm({ mode: 'onSubmit' });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = methods;

  const [createArticle] = useCreateArticleMutation();

  const onSubmit = (data) => {
    const requestData = {
      article: {
        ...data,
        tagList: data.tags.map((tag) => tag.value),
      },
    };

    createArticle(requestData)
      .unwrap()
      .catch((e) => console.log(e));
    navigate('/');
  };

  return (
    <div className={classes.container}>
      <FormProvider {...methods}>
        <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
          <h2 className={classes.title}>Create new article</h2>

          <Input label="Title" id="title" type="text" placeholder="Title" />

          <Input
            label="Short description"
            id="description"
            type="text"
            placeholder="Description"
          />

          <label className={classes.label} htmlFor="body">
            <span>Text</span>

            <textarea
              className={`${classes.field} ${classes.scroll}`}
              style={errors?.text ? { borderColor: '#F5222D' } : null}
              id="body"
              placeholder="Text"
              rows={10}
              {...register('body', { required: 'This is required' })}
            />

            <p className={classes.error}>
              {errors?.body && errors.body.message}
            </p>
          </label>

          <EditTags />

          <button className={classes.create} type="submit">
            Send
          </button>
        </form>
      </FormProvider>
    </div>
  );
}

export default CreateArticle;
