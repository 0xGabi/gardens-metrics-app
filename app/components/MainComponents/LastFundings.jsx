import { useContext } from "react";
import { DataContext } from "~/providers/DataProvider";
import HoneyAmount from "../HelperComponents/HoneyAmount";

import { Tag, useViewport, IdentityBadge } from "@1hive/1hive-ui";

const LastFundings = () => {
  const { LastProposals } = useContext(DataContext);
  const { below } = useViewport();

  return (
    <div className="flex flex-col flex-auto min-h-fit rounded-2xl bg-clip-border mb-10 px-3 w-full max-w-full lg:w-5/12 ">
      <div className="border-black/12.5 shadow-soft-xl relative flex min-w-0 flex-col break-words rounded-2xl border-0 border-solid bg-[#041F46] bg-clip-border">
        <div className="border-black/12.5 mb-0 rounded-t-2xl border-b-0 border-solid bg-[#041F46] p-2 pb-0">
          <div className="flex flex-wrap">
            <div className="w-full">
              <h3 className="text-center">Last Fundings Proposals</h3>
            </div>
            <div className="flex-none w-5/12 max-w-full px-3 my-auto text-right lg:w-1/2 lg:flex-none">
              {/* possible svg ??? */}
              {/* <small>svg</small> */}
            </div>
          </div>
        </div>
        <div className="mb-2 mt-4">
          <div className="">
            <table class="w-full">
              <thead>
                <tr className="">
                  <th className="w-1/2 border-solid py-4 2xl:py-8">
                    Beneficiary
                  </th>
                  <th className="w-1/5 border-solid">Amount</th>
                  <th className="w-1/5 border-solid">Date</th>
                </tr>
              </thead>
              <tbody className="mt-2">
                {LastProposals.map((proposal) => (
                  <tr className="px-3">
                    {below(1500) ? (
                      <td className="w-fit border-t-2 border-[#063374]  py-4 text-middle px-3 ">
                        <IdentityBadge
                          customLabel={proposal.beneficiary}
                          entity={proposal.address}
                        />
                      </td>
                    ) : (
                      <td className="w-fit border-t-2 border-[#063374]  py-4 text-middle text-center ">
                        <IdentityBadge
                          customLabel={proposal.address}
                          entity={proposal.address}
                        />
                      </td>
                    )}

                    <td className="border-t-2 border-[#063374]   text-center">
                      {/* <Tag
                        className="ml-2 animate-pulse"
                        background={"#041F46"}
                      >
                        {proposal.requestedAmount}
                      </Tag> */}
                      <HoneyAmount amount={proposal.requestedAmount} />
                    </td>
                    <td className="text-center border-t-2 border-[#063374] px-3">
                      {proposal.date}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};
//ui 1hive
{
  /* <Table
          noSideBorders={true}
          header={
            <TableRow>
              <TableHeader title="Beneficiary" />
              <TableHeader title="Amount" />
              <TableHeader title="Month" />
              <TableHeader title="Year" />
            </TableRow>
          }
        >
          {LastProposals.map((proposal) => (
            <TableRow>
              <TableCell>
                <Text>{proposal.beneficiary}</Text>
              </TableCell>
              <TableCell>
                <Text>{proposal.requestedAmount}</Text>
              </TableCell>
              <TableCell>
                <Text>{proposal.transferAt.month}</Text>
              </TableCell>
              <TableCell>
                <Text>{proposal.transferAt.year}</Text>
              </TableCell>
            </TableRow>
          ))}
        </Table>
        */
}

export default LastFundings;
