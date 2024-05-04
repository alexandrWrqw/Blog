import { useNavigate, useLocation } from 'react-router-dom';
import { useForm, FormProvider } from 'react-hook-form';

import { useEditArticleMutation } from '../../API/articlesApi';

import ArticleForm from '../../Components/ArticleForm/ArticleForm';
import Loader from '../../Components/Loader/Loader';

function EditArticlePage() {
  const navigate = useNavigate();
  const location = useLocation();
  const [editArticle, { isLoading }] = useEditArticleMutation();
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

    editArticle({ slug, requestData })
      .unwrap()
      .then(() => navigate(`/articles/${slug}`, { replace: true }));
  };

  if (isLoading) return <Loader />;

  return (
    <div>
      <FormProvider {...methods}>
        <ArticleForm submit={onSubmit} edit />
      </FormProvider>
    </div>
  );
}

export default EditArticlePage;
