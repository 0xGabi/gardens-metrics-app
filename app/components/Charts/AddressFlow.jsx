import { RefContext } from "~/providers/RefProvider";
import { useContext } from "react";
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

  const { AddressFlowRef } = useContext(RefContext);

  const filterMonth_Year = (outflows) => {
    const data1 = [];

    const redu = outflows.reduce(function (acc, v) {
      acc[v.address] = (acc[v.address] || 0) + Number(v.requestedAmount);
      return acc;
    }, {});

    data1.push(redu);

    const xMonth_yValue = data1.map((xAndy) => ({
      x: Object.keys(xAndy).toString(),
      y: Number(Object.values(xAndy)),
    }));

    return xMonth_yValue;
  };

  const Beneficary_SUM = outflows.reduce(function (acc, v) {
    acc[v.address] = (acc[v.address] || 0) + Number(v.requestedAmount);
    return acc;
  }, {});

  const BeneficiariesAndAmounts = Object.entries(Beneficary_SUM);

  return (
    <div ref={AddressFlowRef} className="max-w-full mt-8 mb-8">
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
