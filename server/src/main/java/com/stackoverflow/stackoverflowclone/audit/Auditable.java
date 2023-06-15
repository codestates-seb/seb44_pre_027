package com.stackoverflow.stackoverflowclone.audit;

import lombok.Getter;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;

import javax.persistence.Column;
import javax.persistence.EntityListeners;
import javax.persistence.MappedSuperclass;
import java.time.LocalDateTime;

/**
 * extends Auditable 해서 사용하시면 됩니다
 */
@Getter
@MappedSuperclass
@EntityListeners(AuditingEntityListener.class)  // 엔티티의 변경 이벤트를 감지하고 처리하는 리스너를 등록하는 어노테이션
public abstract class Auditable {

    @CreatedDate
    @Column(name = "created_at", updatable = false)
    private LocalDateTime createdAt;

    @LastModifiedDate
    @Column(name = "modified_at")
    private LocalDateTime modifiedAt;
}
