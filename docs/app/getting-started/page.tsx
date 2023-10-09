import { Title } from '@mantine/core';
import { getRouteMetadata } from '~/lib/utils';

export const metadata = getRouteMetadata('/getting-started');

export default function GettingStartedPage() {
  return (
    <>
      <Title order={2}>Getting started</Title>
      <p>
        Magni natus quas, modi atque blanditiis rem itaque, dignissimos odit eaque suscipit eius tempora ratione. At et
        aspernatur consequuntur dolor corrupti repudiandae! Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Explicabo quo, doloremque ab dignissimos inventore voluptas possimus aliquam voluptatibus laudantium? Sed ullam
        quod, saepe accusamus minus exercitationem esse obcaecati doloribus dicta natus nam ducimus debitis iusto
        cupiditate quam minima praesentium molestiae, quo aut eius, repellat dolorum modi corporis atque. Optio
        molestias nulla reprehenderit porro natus! Expedita vero atque placeat nam aperiam magnam? Quaerat, ab repellat,
        unde, cumque molestiae dolores blanditiis laboriosam quibusdam velit dicta provident. Nesciunt incidunt ex
        doloremque? Iure pariatur animi at sed aliquam illum dolorum, atque sit laudantium fugit earum quia quam quo
        voluptatibus quibusdam in sunt similique culpa excepturi id ut reiciendis facilis? Labore cupiditate iste ex
        quisquam nisi dolores accusantium velit, repellendus nulla soluta inventore quaerat doloribus eaque voluptate
        nam asperiores minus incidunt quidem, dicta deserunt quo architecto officia?
      </p>
    </>
  );
}
