import {
  AddressField,
  DataView,
  IdentityBadge,
  EthIdenticon,
} from "@1hive/1hive-ui";
import { entropyToMnemonic } from "ethers/lib/utils";
const AddressFlow = ({ data }) => {
  const BeneficiariesAndAmounts = Object.entries(data);

  return (
    <>
      <DataView
        fields={["Beneficiary", "All-time Amount"]}
        entries={BeneficiariesAndAmounts.map((beneficiary) => [
          beneficiary[0],
          beneficiary[1],
        ])}
        renderEntry={([account, amount]) => {
          //   return [
          //     <AddressField address={account} height="10px" />,
          //     <div>{amount}</div>,
          //   ];
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
    </>
  );
};
{
  /* <DataView
        fields={["Account", "Amount"]}
        entries={[
          { account: "0xd...ftg6", amount: "-7.900,33 ANT" },
          { account: "0xd...ftg6", amount: "-8.760,90 ANT" },
          { account: "0xd...ftg6", amount: "+5.321 ANT" },
        ]}
        renderEntry={({ account, amount }) => {
          return [<AddressField address={account} />, <div>{amount}</div>];
        }}
      /> */
}
// { account: "0x4f...34t9", amount: "+5.321 ANT" },
// // entries={[
//     { account: "0x..frfr", amount: "-7.900,33 ANT" },
//     { account: "0x..", amount: "-8.760,90 ANT" },
//     { account: "0x..", amount: "+5.321 ANT" },
// //
export default AddressFlow;
