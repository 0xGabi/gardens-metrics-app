import {
  AddressField,
  DataView,
  IdentityBadge,
  EthIdenticon,
  ListView,
} from "@1hive/1hive-ui";
import { useLoaderData } from "@remix-run/react";

const AddressFlow = ({}) => {
  const { gardensOutflows } = useLoaderData();
  const outflows = gardensOutflows;

  const filterMonth_Year = (outflows: any) => {
    outflows.reduce(function (acc: any, v: any) {
      acc[v.beneficiary] =
        (acc[v.beneficiary] || 0) + Number(v.requestedAmount);
      return acc;
    }, {});
  };

  const Beneficary_SUM = outflows.reduce(function (acc: any, v: any) {
    acc[v.address] = (acc[v.address] || 0) + Number(v.requestedAmount);
    return acc;
  }, {});

  const BeneficiariesAndAmounts = Object.entries(Beneficary_SUM);

  console.log(typeof BeneficiariesAndAmounts[0]);

  return (
    <div className="max-w-full px-3">
      <DataView
        fields={["Beneficiary", "All-time Amount"]}
        mode={ListView}
        entries={BeneficiariesAndAmounts.map((beneficiary) => [
          beneficiary[0],
          beneficiary[1],
        ])}
        renderEntry={([account, amount]) => {
          return [
            <IdentityBadge
              customLabel={account}
              entity={account}
              compact={true}
              shorten={true}
            />,
            <div>{amount}</div>,
          ];
        }}
      />
    </div>
  );
};

export default AddressFlow;
