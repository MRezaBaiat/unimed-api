export declare enum UserType {
    PATIENT = "PATIENT",
    DOCTOR = "DOCTOR"
}
export declare enum TypingStatus {
    TYPING = "TYPING",
    IDLE = "IDLE",
    SENDING_MEDIA = "SENDING_MEDIA",
    RECORDING_VOICE = "RECORDING_VOICE"
}
export declare enum CallMetricsEvent {
    REQUEST_RECEIVED = "REQUEST_RECEIVED",
    REQUEST_CANCELLED_BY_OTHER = "REQUEST_CANCELLED_BY_OTHER",
    REJECT_CLICKED = "REJECT_CLICKED",
    ACCEPT_CLICKED = "ACCEPT_CLICKED",
    RING_STATE_CHANGED = "RING_STATE_CHANGED",
    END_CALL_CLICKED = "END_CALL_CLICKED",
    OTHER_SIDE_BUSY = "OTHER_SIDE_BUSY",
    PIP_CLICKED = "PIP_CLICKED",
    FULLSCREEN_CLICKED = "FULLSCREEN_CLICKED",
    SOCKET_STATE_CHANGED = "SOCKET_STATE_CHANGED",
    CALL_CLOSED = "CALL_CLOSED",
    CAMERA_SWITCH_CLICKED = "CAMERA_SWITCH_CLICKED",
    MUTE_CLICKED = "MUTE_CLICKED",
    SPEAKER_CLICKED = "SPEAKER_CLICKED",
    AUDIO_ROUTE_CHANGED = "AUDIO_ROUTE_CHANGED",
    TRACK_STATE_CHANGED = "TRACK_STATE_CHANGED",
    TRACK_CREATED = "TRACK_CREATED",
    TRACK_STOPPED = "TRACK_STOPPED",
    CALL_STATE_CHANGED = "CALL_STATE_CHANGED",
    RTC_CONNECTION_STATE_CHANGED = "RTC_CONNECTION_STATE_CHANGED",
    RTC_ICE_CANDIDATE = "RTC_ICE_CANDIDATE",
    RTC_ICE_CANDIDATE_ERROR = "RTC_ICE_CANDIDATE_ERROR",
    RTC_ICE_CONNECTION_STATE_CHANGED = "RTC_ICE_CONNECTION_STATE_CHANGED",
    RTC_ICE_GATHERING_STATE_CHANGED = "RTC_ICE_GATHERING_STATE_CHANGED",
    RTC_NEGOTIATION_NEEDED = "RTC_NEGOTIATION_NEEDED",
    RTC_SIGNALING_STATE_CHANGED = "RTC_SIGNALING_STATE_CHANGED",
    STREAM_INJECTED_TO_ELEMENT = "STREAM_INJECTED_TO_ELEMENT",
    STREAM_REMOVED_FROM_ELEMENT = "STREAM_REMOVED_FROM_ELEMENT",
    STATS = "STATS",
    OTHER_SIDE_READY = "OTHER_SIDE_READY",
    READY_ACKNOWLEDGED = "READY_ACKNOWLEDGED",
    ERROR = "ERROR",
    LOG = "LOG",
    NETWORK_STATE_CHANGED = "NETWORK_STATE_CHANGED",
    PING = "PING"
}
export declare enum AdminType {
    MANAGER = "MANAGER",
    ADMIN = "ADMIN",
    HEALTHCENTER = "HEALTHCENTER"
}
export declare enum ReservationState {
    CONFIRMED = "CONFIRMED",
    CANCELLED = "CANCELLED",
    NEW = "NEW",
    DONE = "DONE",
    TIME_PAST = "TIME_PAST"
}
export declare enum TransactionType {
    CHARGE_BY_GATEWAY = "CHARGE_BY_GATEWAY",
    CHARGE_BY_ADMIN = "CHARGE_BY_ADMIN",
    REDUCE_BY_ADMIN = "REDUCE_BY_ADMIN",
    STARTER_CHARGE = "STARTER_CHARGE",
    VISIT_PAYMENT = "VISIT_PAYMENT",
    PAYROLL = "PAYROLL",
    RETURN_VISIT_PAYMENT = "RETURN_VISIT_PAYMENT",
    SERVICE_REQUEST_PAYMENT = "SERVICE_REQUEST_PAYMENT"
}
export declare enum HealthCenterType {
    HOSPITAL = "HOSPITAL",
    CLINIC = "CLINIC"
}
export declare enum VisitStatus {
    IN_QUEUE = "IN_QUEUE",
    STARTED = "STARTED",
    ENDED = "ENDED",
    CANCELLED = "CANCELLED"
}
export declare enum ReceiveStatus {
    FAILED = "FAILED",
    DOWNLOADING = "DOWNLOADING",
    FILE_AVAILABLE = "FILE_AVAILABLE"
}
export declare enum SendStatus {
    FAILED = "FAILED",
    WAITING_FOR_QUEUE = "WAITING_FOR_QUEUE",
    SENDING = "SENDING",
    SENT = "SENT",
    DELIVERED = "DELIVERED",
    READEN = "READEN"
}
export declare enum DebugType {
    outgoing = "outgoing",
    incoming = "incoming",
    presence = "presence",
    remote_logs = "remote_logs"
}
export declare enum NetworkEventTypes {
    CHANGE = "network.change"
}
export declare enum SocketEventTypes {
    CONNECTED = "socket.connected",
    DISCONNECTED = "socket.disconnected",
    RECONNECTING = "socket.reconnecting",
    RECONNECTION_FAILED = "socket.reconnection_failed",
    WILL_NOT_RECONNECT = "socket.will_not_reconnect"
}
export declare enum ConferenceDetectionEventTypes {
    MIC_INPUT_STATE = "conference.detection.mic.input_state",
    TALK_WHILE_MUTED = "conference.detection.talk_while_muted"
}
export declare enum ConferenceFeaturesEventTypes {
    MIC_MUTE = "conference.feature.mic.mute",
    MIC_NOISE = "conference.feature.mic.noise"
}
export declare enum ConferenceMediaDevicesEventTypes {
    LIST_CHANGED = "conference.media_devices.list_changed",
    PERMISSION_STATE_UPDATE = "conference.media_devices.permission_state_update",
    SLOW_GET = "conference.media_devices.slow_get",
    PERMISSION_DENIED = "conference.media_devices.permission_denied",
    ERROR_GETTING = "conference.media_devices.error_getting"
}
export declare enum ConferenceTrackEventTypes {
    ADDED = "conference.track.added",
    REMOVED = "conference.track.removed",
    AUDIO_LEVEL_CHANGED = "conference.track.audio_level_changed",
    SOURCE_DATA_STATE = "conference.track.source_data_state",
    NO_STREAM = "conference.track.no_stream",
    UNSUPPORTED_RESOLUTION = "conference.track.unsupported_resolution"
}
export declare enum ConferenceParticipantConnectionEventTypes {
    CONNECTING = "conference.participant.connection.connecting",
    INTERRUPTED = "conference.participant.connection.interrupted",
    RESTORING = "conference.participant.connection.restoring",
    RESTORED = "conference.participant.connection.restored",
    ESTABLISHED = "conference.participant.connection.established",
    QUALITY_STATE = "conference.participant.connection.quality_state",
    GET_STATS_UPDATE = "conference.participant.connection.get_stats_update",
    PING = "conference.participant.connection.ping"
}
export declare enum ConferenceParticipantPresenceEventTypes {
    JOINED = "conference.participant.presence.joined",
    LEFT = "conference.participant.presence.left"
}
export declare enum ConferenceRoomEventTypes {
    FAILED = "conference.room.failed",
    CREATE = "conference.room.create",
    REJECTED = "conference.room.rejected",
    DESTROYED = "conference.room.destroyed"
}
export declare enum ConferenceMode {
    P2P = "p2p",
    STREAM = "stream"
}
export declare enum ConferenceType {
    audio = "audio",
    video_audio = "video/audio"
}
export declare enum ParticipantState {
    connecting = "connecting",
    reconnecting = "reconnecting",
    connected = "connected",
    interrupted = "interrupted",
    paused = "paused"
}
export declare enum IOStatus {
    READY = "READY",
    DOWNLOADING = "DOWNLOADING",
    UPLOADING = "UPLOADING",
    WAITING_FOR_UPLOAD = "WAITING_FOR_UPLOAD",
    WAITING_FOR_DOWNLOAD = "WAITING_FOR_DOWNLOAD",
    IN_DOWNLOAD_QUEUE = "IN_DOWNLOAD_QUEUE",
    IN_UPLOAD_QUEUE = "IN_UPLOAD_QUEUE"
}
export declare enum EventType {
    REQUEST_VISIT = "REQUEST_VISIT",
    REQUEST_END_VISIT = "REQUEST_END_VISIT",
    VISIT_REQUEST_ACCEPTED = "VISIT_REQUEST_ACCEPTED",
    VISIT_REQUEST_DECLINED = "VISIT_REQUEST_DECLINED",
    VISIT_REQUEST_INQUEUE = "VISIT_REQUEST_INQUEUE",
    EVENT_ERROR = "EVENT_ERROR",
    EVENT_STATUS_UPDATE = "EVENT_STATUS_UPDATE",
    EVENT_SET_AVAILABLE = "EVENT_SET_AVAILABLE",
    EVENT_CALL_REQUEST = "EVENT_CALL_REQUEST",
    EVENT_CALL_ACCEPTED = "EVENT_CALL_ACCEPTED",
    EVENT_CALL_DECLINED = "EVENT_CALL_DECLINED",
    EVENT_CALL_ENDED = "EVENT_CALL_ENDED"
}
export declare enum ChatType {
    NOTIFICATION = "NOTIFICATION",
    TEXT = "TEXT",
    IMAGE = "IMAGE",
    VIDEO = "VIDEO",
    MUSIC = "MUSIC",
    UNKNOWN = "UNKNOWN",
    GIF = "GIF",
    PDF = "PDF"
}
