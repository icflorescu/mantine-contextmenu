import { PageTitle } from '~/components/PageTitle';
import { Txt } from '~/components/Txt';
import { getRouteMetadata } from '~/lib/utils';

const PATH = '/hire-the-author';
export const metadata = getRouteMetadata(PATH);

export default function HireTheAuthorPage() {
  return (
    <>
      <PageTitle of={PATH} />
      <Txt>
        At et aspernatur consequuntur dolor corrupti repudiandae! Lorem ipsum dolor sit amet consectetur adipisicing
        elit. Explicabo quo, doloremque ab dignissimos inventore voluptas possimus aliquam voluptatibus laudantium? Sed
        ullam quod, saepe accusamus minus exercitationem esse obcaecati doloribus dicta natus nam ducimus debitis iusto
        cupiditate quam minima praesentium molestiae, quo aut eius, repellat dolorum modi corporis atque. Optio
        molestias nulla reprehenderit porro natus! Expedita vero atque placeat nam aperiam magnam? Quaerat, ab repellat,
        unde, cumque molestiae dolores blanditiis laboriosam quibusdam velit dicta provident. Nesciunt incidunt ex
        doloremque?
      </Txt>
    </>
  );
}
