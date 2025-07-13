import { v4 as uuidv4 } from "uuid";
export var WatcherEntryDataType;
(function (WatcherEntryDataType) {
    WatcherEntryDataType["requests"] = "request";
    WatcherEntryDataType["exceptions"] = "exception";
    WatcherEntryDataType["dumps"] = "dump";
    WatcherEntryDataType["logs"] = "log";
    WatcherEntryDataType["queries"] = "query";
    WatcherEntryDataType["clientRequests"] = "client-request";
})(WatcherEntryDataType || (WatcherEntryDataType = {}));
export var WatcherEntryCollectionType;
(function (WatcherEntryCollectionType) {
    WatcherEntryCollectionType["request"] = "requests";
    WatcherEntryCollectionType["exception"] = "exceptions";
    WatcherEntryCollectionType["dump"] = "dumps";
    WatcherEntryCollectionType["log"] = "logs";
    WatcherEntryCollectionType["query"] = "queries";
    WatcherEntryCollectionType["clientRequest"] = "client-requests";
})(WatcherEntryCollectionType || (WatcherEntryCollectionType = {}));
export default class WatcherEntry {
    content;
    created_at;
    family_hash;
    id;
    batchId;
    sequence;
    tags;
    type;
    constructor(name, data, batchId) {
        this.id = uuidv4();
        this.created_at = new Date().toISOString();
        this.family_hash = '';
        this.sequence = Math.round(Math.random() * 100000);
        this.tags = [];
        this.type = name;
        this.content = data;
        this.batchId = batchId;
    }
}
