import { Title } from '@mantine/core';
import { getRouteMetadata } from '~/lib/utils';

export const metadata = getRouteMetadata('/hire-the-author');

export default function HireTheAuthorPage() {
  return (
    <>
      <Title order={2}>Hire the author</Title>
      <p>
        At et aspernatur consequuntur dolor corrupti repudiandae! Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Explicabo quo, doloremque ab dignissimos inventore voluptas possimus aliquam voluptatibus laudantium? Sed
        ullam quod, saepe accusamus minus exercitationem esse obcaecati doloribus dicta natus nam ducimus debitis iusto
        cupiditate quam minima praesentium molestiae, quo aut eius, repellat dolorum modi corporis atque. Optio
        molestias nulla reprehenderit porro natus! Expedita vero atque placeat nam aperiam magnam? Quaerat, ab repellat,
        unde, cumque molestiae dolores blanditiis laboriosam quibusdam velit dicta provident. Nesciunt incidunt ex
        doloremque?
      </p>
    </>
  );
}
