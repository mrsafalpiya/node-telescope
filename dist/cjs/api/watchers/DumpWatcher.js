"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.dump = exports.DumpWatcherEntry = void 0;
const WatcherEntry_js_1 = __importStar(require("../WatcherEntry.js"));
const DB_js_1 = __importDefault(require("../DB.js"));
class DumpWatcherEntry extends WatcherEntry_js_1.default {
    constructor(data) {
        super(WatcherEntry_js_1.WatcherEntryDataType.dumps, data);
    }
}
exports.DumpWatcherEntry = DumpWatcherEntry;
function dump(data) {
    const watcher = new DumpWatcher(data);
    watcher.save();
}
exports.dump = dump;
class DumpWatcher {
    static entryType = WatcherEntry_js_1.WatcherEntryCollectionType.dump;
    data;
    constructor(data) {
        this.data = data;
    }
    save() {
        const entry = new DumpWatcherEntry({
            dump: this.data
        });
        DB_js_1.default.dumps().save(entry);
    }
}
exports.default = DumpWatcher;
