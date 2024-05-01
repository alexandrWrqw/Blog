import { useNavigate, useLocation } from 'react-router-dom';
import { useForm, FormProvider } from 'react-hook-form';

import { useEditArticleMutation } from '../../API/articlesApi';

import classes from './EditArticle.module.scss';
import NewArticle from '../NewArticle/NewArticle';

function EditArticle() {
  const navigate = useNavigate();
  const location = useLocation();
  const [editArticle] = useEditArticleMutation();
  const { slug, title, description, body, tagList } = location.state;

  const methods = useForm({
    mode: 'onSubmit',
    defaultValues: {
      title,
      description,
      body,
      tagList: tagList.map((tag) => ({ value: tag })),
    },
  });

  const onSubmit = (data) => {
    const requestData = {
      article: {
        ...data,
        tagList: data.tagList.map((tag) => tag.value),
      },
    };

    editArticle({ slug, requestData });
    navigate(`/articles/${slug}`, { replace: true });
  };

  return (
    <div className={classes.container}>
      <FormProvider {...methods}>
        <NewArticle submit={onSubmit} edit />
      </FormProvider>
    </div>
  );
}

export default EditArticle;
