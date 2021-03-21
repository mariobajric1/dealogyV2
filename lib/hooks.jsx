import useSWR from 'swr';
import fetcher from './fetch';

export function useCurrentUser() {
  const { data, mutate } = useSWR('/api/user', fetcher);
  const user = data?.user;
  return [user, { mutate }];
}

export function useUser(id) {
  const { data } = useSWR(`/api/user/${id}`, fetcher, { revalidateOnFocus: false });
  return data?.user;
}
