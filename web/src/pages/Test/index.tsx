// @ts-ignore
import {FEditableTable} from "../../components";
import {useState} from "react";

const columns = [
  {
    name: 'assign_type',
    header: true,
    items: [
      {id: 1, name: 'order', code: 1, search_str: 'order|1'},
      {id: 2, name: 'seri', code: 2, search_str: 'seri|2'},
      {id: 3, name: '依頼', code: 2, search_str: '依頼|3'},
      {id: 4, name: '定期', code: 2, search_str: '定期|4'},
      {id: 5, name: '買付', code: 2, search_str: '買付|5'},
      {id: 6, name: '卸', code: 2, search_str: '卸|6'},
      {id: 7, name: '小売', code: 2, search_str: '小売|7'}
    ],
    dropdown: true, // true: dropdown box, false: input
  },
  {
    name: 'buyer_info',
    isActive: true,
    enterSkip: false,
    showTooltip: false,
    showLess: false
  },
  {
    name: 'item',
    header: true,
    items: [
      {id: 1, name: 'カトレア 切', code: 1, search_str: 'カトレア 切|1'},
      {id: 2, name: 'カトレア 鉢', code: 2, search_str: 'カトレア 鉢|2'},
      {id: 3, name: 'ファレノ 切', code: 3, search_str: 'ファレノ 切|3'},
      {id: 4, name: 'ファレノ ツマミ', code: 4, search_str: 'ファレノ ツマミ|4'},
      {id: 5, name: 'ファレノ 大輪鉢', code: 5, search_str: 'ファレノ 大輪鉢|5'},
      {id: 6, name: 'ファレノ ミディ鉢', code: 6, search_str: 'ファレノ ミディ鉢|6'},
      {id: 7, name: 'その他の属', code: 7, search_str: 'その他の属|7'},
      {id: 8, name: 'ファレノブシス苗', code: 8, search_str: 'ファレノブシス苗|8'},
      {id: 9, name: 'フラスコ苗', code: 9, search_str: 'フラスコ苗|9'},
      {id: 10, name: '諸経費', code: 10, search_str: '諸経費|10'},
      {id: 11, name: '温室燃料費', code: 11, search_str: '温室燃料費|11'},
      {id: 12, name: '資材', code: 12, search_str: '資材|12'},
      {id: 13, name: '各種賃貸料', code: 13, search_str: '各種賃貸料|13'},
      {id: 14, name: '調整額', code: 14, search_str: '調整額|14'}
    ],
    dropdown: true,
  },
  {
    name: 'variety',
    header: true,
    items: [
      {id: 1, name: 'ハッピーストリーム', code: 1, search_str: 'ハッピーストリーム|1'},
      {id: 2, name: 'ハニールージュ', code: 2, search_str: 'ハニールージュ|2'},
      {id: 3, name: 'おぼろ月', code: 3, search_str: 'おぼろ月|3'},
      {id: 4, name: 'ビックリップ', code: 4, search_str: 'ビックリップ|4'},
      {id: 5, name: 'ハッピーライフ', code: 5, search_str: 'ハッピーライフ|5'},
      {id: 6, name: 'W', code: 6, search_str: 'W|6'},
      {id: 7, name: 'WR', code: 7, search_str: 'WR|7'},
      {id: 8, name: '花+宅配OP+運賃', code: 8, search_str: '花+宅配OP+運賃|8'},
      {id: 9, name: 'グリーン', code: 9, search_str: 'グリーン|9'},
      {id: 10, name: '濃ピンク', code: 10, search_str: '濃ピンク|10'},
      {id: 11, name: 'グリーンアース', code: 11, search_str: 'グリーンアース|11'},
      {id: 12, name: '黄大輪', code: 12, search_str: '黄大輪|12'},
      {id: 13, name: 'MIX', code: 13, search_str: 'MIX|13'},
      {id: 14, name: 'ハッピータイム', code: 14, search_str: 'ハッピータイム|14'},
      {id: 15, name: 'P', code: 15, search_str: 'P|15'},
      {id: 16, name: 'キャンディーピンク', code: 16, search_str: 'キャンディーピンク|16'},
      {id: 17, name: 'ホンリンローズ', code: 17, search_str: 'ホンリンローズ|17'},
      {id: 18, name: '桜姫', code: 18, search_str: '桜姫|18'}
    ],
    dropdown: true
  }
]


export default function () {
  const [rows, setRows] = useState([
    {
      assign_type: '',
      item: 'カトレア 切',
      variety: 'ハッピーストリーム',
    },
    {
      assign_type: 'order',
      item: 'カトレア 切',
      variety: 'ハニールージュ',
    },
    {
      assign_type: 'seri',
      item: 'カトレア 切',
      variety: 'ビックリップ',
    }
  ])

  const onInput = (value: any) => {
    // console.log('input ben ngoai', value)
  }

  return (
    <>
      <FEditableTable columns={columns} rows={rows} onInput={onInput}/>
    </>
  )
}