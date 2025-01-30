export const selectLoading = (state) =>
  state.teachers.loading;

export const selectError = (state) =>
  state.teachers.error;

export const selectTeachers = (state) =>
  state.teachers.list || [];

export const selectLastVisible = (
  state,
) => state.teachers.lastVisible;
