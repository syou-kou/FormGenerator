// デバッグモード
// ・対象シートが「sample」になる
// ・一部のメッセージを追加出力する
const DEBUG_MODE = true;

// ログ出力シート名
const SHEET_NAME_LOG = "log";

// ログ種別
const LOG_TYPE_ERROR = "エラー";
const LOG_TYPE_WARNING = "警告";
const LOG_TYPE_QUESTION = "問題";

// データ種別
const DATATYPE_WORKBOOK_TITLE = "問題集タイトル";
const DATATYPE_SHEET_NAME = "シート名";
const DATATYPE_CHAPTER_TITLE = "章タイトル";
const DATATYPE_CHAPTER_DESCRIPTION = "章概要";
const DATATYPE_QUESTION_SENTENCE = "問題文";
const DATATYPE_HELP_TEXT = "問題文備考";
const DATATYPE_CHOICE = "選択肢";
const DATATYPE_ANSWER = "記述解答";
const DATATYPE_EXPLANATION = "解説文";
const DATATYPE_LINK = "リンク";

// 選択肢の正解
const CHOICE_IS_CORRECT = "〇";

// 解答形式
const ANSWER_TYPE_SELECTION_SINGLE = "単一選択式";
const ANSWER_TYPE_SELECTION_MULTIPLE = "複数選択式";
const ANSWER_TYPE_DESCRIPTION = "記述式";
const ANSWER_TYPE_OTHER = "判別不能";

// チェック種別
const VALIDATION_TYPES = {
	NOT_NULL:  "NOT_NULL",
	DATA_TYPE: "DATA_TYPE",
}