import { Button, Text, Title } from '../../../../ui';

import { useFormBlog } from '../../../../ui/organisms/AddNewBlog/hook/useFormBlog';

export const LoginPage = () => {
  const {
    postBlogError,
    loading,
    errors,
    updatePhoto,
    processPreview,
    resetPhoto,
    upLoadPhoto,
    inputElement,
    register,
    handleSubmit,
    onSubmit,
  } = useFormBlog({ onCloseModal: () => {} });
  //className="backdrop-blur-sm bg-[rgba(0,0,0,0.6)] rounded-3xl h-96 w-96 flex items-center justify-center "
  //screen flex items-center w-full h-full justify-center flex-1
  return (
    <section className="h-full overflow-y-hidden">
      <article className="flex w-full h-[10%] justify-between gap-20 relative">
        <div className="w-full h-full">
          <img
            className="w-full h-screen object-cover"
            style={{
              height: 'calc(100vh - 260px)',
            }}
            src="https://res.cloudinary.com/runyshark1/image/upload/v1708316368/next-blog/lukbixb6shkkxw9iqjiz.gif"
            alt="login"
          />
        </div>
        <div className="w-full lg:w-1/2 absolute backdrop-blur-sm bg-[rgba(0,0,0,0.6)] right-0 h-full overflow-hidden">
          {postBlogError && (
            <div className="p-4 bg-red-100 overflow-y-auto">
              <Title fontSize="text-sm">{postBlogError}</Title>
            </div>
          )}
          <div className="h-full flex items-center justify-center flex-col">
            <form
              className="w-96  h-full justify-center items-center flex flex-col gap-20"
              onSubmit={handleSubmit(onSubmit)}
            >
              <Title>Crear cuenta</Title>
              <div className="p-4 w-full">
                <div className="space-y-5">
                  <div>
                    <Text className="mb-3">Correo</Text>
                    <div className="relative">
                      <input
                        type="email"
                        {...register('title')}
                        className="border border-indigo-500  bg-transparent relative rounded-md w-full h-w-12 z-1 px-5 py-2 block transition-all   shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-300 sm:text-sm sm:leading-6 focus:outline-none"
                      />
                      {errors.title?.message ? (
                        <p className="text-error-600 mt-2">
                          {errors.title.message}
                        </p>
                      ) : (
                        <p className="text-error-600 mt-2">&nbsp;</p>
                      )}
                    </div>
                  </div>
                  <div>
                    <Text className="mb-3">Contraseña</Text>
                    <div className="relative">
                      <input
                        type="password"
                        {...register('author')}
                        className="border border-indigo-500  bg-transparent relative rounded-md w-full h-w-12 z-1 px-5 py-2 block transition-all   shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-300 sm:text-sm sm:leading-6 focus:outline-none"
                      />
                      {errors.title?.message ? (
                        <p className="text-error-600 mt-2">
                          {errors.author?.message}
                        </p>
                      ) : (
                        <p className="text-error-600 mt-2">&nbsp;</p>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-4 flex flex-col justify-end gap-x-2 w-full gap-4">
                <Button className="h-10" type="submit" disabled={loading}>
                  Iniciar session
                </Button>
                <Button
                  variant="secondary"
                  className="h-10"
                  type="submit"
                  disabled={loading}
                >
                  Crear cuenta
                </Button>
              </div>
            </form>
          </div>
        </div>
      </article>
    </section>
  );
};
