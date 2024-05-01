import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm, FormProvider } from 'react-hook-form';

import { useCreateArticleMutation } from '../../API/articlesApi';
import useAuth from '../../hooks/useAuth';

import classes from './CreateArticle.module.scss';
import NewArticle from '../NewArticle/NewArticle';

function CreateArticle() {
  const { isAuth } = useAuth();
  const navigate = useNavigate();

  const methods = useForm({ mode: 'onSubmit' });

  const [createArticle] = useCreateArticleMutation();

  const onSubmit = (data) => {
    const requestData = {
      article: {
        ...data,
        tagList: data.tagList.map((tag) => tag.value),
      },
    };

    createArticle(requestData)
      .unwrap()
      .catch((e) => console.log(e));
    navigate('/');
  };

  useEffect(() => {
    if (!isAuth) {
      navigate('/sign-in');
    }
  }, []);

  return (
    <div className={classes.container}>
      <FormProvider {...methods}>
        <NewArticle submit={onSubmit} />
      </FormProvider>
    </div>
  );
}

export default CreateArticle;
