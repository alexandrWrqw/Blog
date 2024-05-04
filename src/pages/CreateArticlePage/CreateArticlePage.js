import { useNavigate } from 'react-router-dom';
import { useForm, FormProvider } from 'react-hook-form';

import { useCreateArticleMutation } from '../../API/articlesApi';

import classes from './CreateArticlePage.module.scss';
import ArticleForm from '../../Components/ArticleForm/ArticleForm';
import Loader from '../../Components/Loader/Loader';

function CreateArticlePage() {
  const navigate = useNavigate();
  const [createArticle, { isLoading }] = useCreateArticleMutation();

  const methods = useForm({ mode: 'onSubmit' });

  const onSubmit = (data) => {
    const requestData = {
      article: {
        ...data,
        tagList: data.tagList.map((tag) => tag.value),
      },
    };

    createArticle(requestData)
      .unwrap()
      .then((res) => navigate(`/articles/${res.article.slug}`));
  };

  if (isLoading) return <Loader />;

  return (
    <div className={classes.container}>
      <FormProvider {...methods}>
        <ArticleForm submit={onSubmit} />
      </FormProvider>
    </div>
  );
}

export default CreateArticlePage;
