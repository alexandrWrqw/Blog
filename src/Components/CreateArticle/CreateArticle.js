import { useNavigate } from 'react-router-dom';
import { useForm, FormProvider } from 'react-hook-form';

import { useCreateArticleMutation } from '../../API/articlesApi';

import classes from './CreateArticle.module.scss';
import NewArticle from '../NewArticle/NewArticle';

function CreateArticle() {
  const navigate = useNavigate();
  const [createArticle] = useCreateArticleMutation();

  const methods = useForm({ mode: 'onSubmit' });

  const onSubmit = (data) => {
    const requestData = {
      article: {
        ...data,
        tagList: data.tagList.map((tag) => tag.value),
      },
    };

    createArticle(requestData);
    navigate('/');
  };

  return (
    <div className={classes.container}>
      <FormProvider {...methods}>
        <NewArticle submit={onSubmit} />
      </FormProvider>
    </div>
  );
}

export default CreateArticle;
